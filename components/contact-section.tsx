"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { useMobileInteractions } from "@/hooks/use-mobile-interactions"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { isMobile, isActive, getInteractionProps } = useMobileInteractions()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in all required fields (Name, Email, and Message)")
      return
    }

    setIsSubmitting(true)

    try {
      // Create email body with form data
      const emailBody = `Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'Contact from Portfolio'}

Message:
${formData.message}

---
Sent from Royal Portfolio Contact Form`

      // Create mailto URL with pre-filled data
      const mailtoUrl = `mailto:alfikridev@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(emailBody)}`
      
      // Open email client
      window.location.href = mailtoUrl
      
      // Small delay to allow email client to open
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Reset form after sending
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      
      alert("Email client opened! Please send the email from your email application.")
    } catch (error) {
      console.error("Error opening email client:", error)
      alert("There was an error opening your email client. Please try again or contact alfikridev@gmail.com directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/Al-User12" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/alfikrikm/" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "https://x.com/xafkmx" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/yaelahfik/" },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="royal-heading text-3xl md:text-4xl font-bold mb-4 text-accent">Summon the Dev</h2>
          <p className="royal-text text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to embark on a digital journey together? Whether you have a vision to bring to life or seek counsel on
            technical matters, I'm here to help craft something extraordinary.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card 
            className={`p-8 border-accent/10 transition-colors ${
              isMobile && isActive('contact-form') ? 'border-accent/30' : 'hover:border-accent/30'
            }`}
            {...getInteractionProps('contact-form')}
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-accent/20 focus:border-accent"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-accent/20 focus:border-accent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="border-accent/20 focus:border-accent"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder="Tell me about your project or inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-accent/20 focus:border-accent resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className={`w-full bg-accent text-accent-foreground group ${
                  isMobile && isActive('submit-btn') ? 'bg-accent/90' : 'hover:bg-accent/90'
                }`}
                disabled={isSubmitting}
                {...(isMobile ? getInteractionProps('submit-btn') : {})}
              >
                <Send className={`w-5 h-5 mr-2 transition-transform ${
                  isSubmitting 
                    ? 'animate-pulse' 
                    : isMobile && isActive('submit-btn')
                    ? 'translate-x-1'
                    : 'group-hover:translate-x-1'
                }`} />
                {isSubmitting ? 'Opening Email Client...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 border-accent/10">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">alfikridev@gmail.com</p>
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
              <h3 className="text-xl font-bold text-foreground mb-6">Connect & Follow</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => {
                  const buttonId = `social-btn-${index}`
                  const isButtonActive = isActive(buttonId)
                  
                  return (
                  <Button
                    key={index}
                    variant="outline"
                    className={`justify-start border-accent/20 bg-transparent ${
                      isMobile && isButtonActive 
                        ? 'border-accent bg-accent/10' 
                        : 'hover:border-accent hover:bg-accent/10'
                    }`}
                    asChild
                    {...(isMobile ? getInteractionProps(buttonId) : {})}
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                      <span className="ml-2">{link.label}</span>
                    </a>
                  </Button>
                  )
                })}
              </div>
            </Card>

            <Card className="p-8 border-accent/10 bg-accent/5">
              <h3 className="text-xl font-bold text-foreground mb-4">Project Collaboration</h3>
              <p className="royal-text text-muted-foreground mb-4">
                I'm always excited to work on innovative projects that push the boundaries of technology. Whether it's a
                startup MVP, enterprise solution, or experimental concept, let's discuss how we can bring your vision to
                life.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-accent/30 text-accent">
                  Software Development
                </Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">
                  AI Integration
                </Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">
                  Blockchain
                </Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">
                  Consulting
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
