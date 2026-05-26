"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { sendContactEmail, contactSchema, type ContactInput } from "@/app/actions/contact"

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/Al-User12" },
  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/alfikrikm/" },
  { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "https://x.com/xafkmx" },
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/yaelahfik/" },
]

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  const onSubmit = async (data: ContactInput) => {
    try {
      const result = await sendContactEmail(data)
      if (result.success) {
        toast.success("Message sent!", {
          description: result.message,
          duration: 5000,
        })
        reset()
      } else {
        toast.error("Failed to send message", {
          description: "Please check the form and try again.",
        })
      }
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again or email alfikridev@gmail.com directly.",
      })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="royal-heading text-3xl md:text-4xl font-bold mb-4 text-accent">
            Summon the Dev
          </h2>
          <p className="royal-text text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to embark on a digital journey together? Whether you have a vision to bring to
            life or seek counsel on technical matters, I&apos;m here to help craft something
            extraordinary.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 border-accent/10 hover:border-accent/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-accent" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Your name"
                    className="border-accent/20 focus:border-accent"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="text-red-500 text-xs mt-1" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground mb-2 block"
                  >
                    Email <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-accent/20 focus:border-accent"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="text-red-500 text-xs mt-1" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium text-foreground mb-2 block"
                >
                  Subject
                </label>
                <Input
                  id="contact-subject"
                  placeholder="What's this about?"
                  className="border-accent/20 focus:border-accent"
                  {...register("subject")}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-foreground mb-2 block"
                >
                  Message <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  className="border-accent/20 focus:border-accent resize-none"
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  {...register("message")}
                />
                {errors.message && (
                  <p id="contact-message-error" className="text-red-500 text-xs mt-1" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                <Send
                  className={`w-5 h-5 mr-2 transition-transform ${
                    isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"
                  }`}
                  aria-hidden="true"
                />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 border-accent/10">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-accent" aria-hidden="true" />
                <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <a
                    href="mailto:alfikridev@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    alfikridev@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Availability</h4>
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                    Available for new projects
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-accent/10">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect &amp; Follow</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    className="justify-start border-accent/20 hover:border-accent hover:bg-accent/10 bg-transparent"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} profile`}
                    >
                      {link.icon}
                      <span className="ml-2">{link.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-accent/10 bg-accent/5">
              <h3 className="text-xl font-bold text-foreground mb-4">Project Collaboration</h3>
              <p className="royal-text text-muted-foreground mb-4">
                I&apos;m always excited to work on innovative projects that push the boundaries of
                technology. Whether it&apos;s a startup MVP, enterprise solution, or experimental
                concept, let&apos;s discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-accent/30 text-accent">Software Development</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">AI Integration</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">Blockchain</Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">Consulting</Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
