"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import { personalInfo, socialLinks } from "~/lib/data";
import { cn } from "~/lib/utils";
import { submitWebhook } from "~/server/webhook";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitWebhook(formState);

      if (result.success) {
        setIsSubmitting(false);
        setFormStatus("success");
        setFormState({ name: "", email: "", message: "" });

        // Reset form status after 3 seconds
        setTimeout(() => {
          setFormStatus("idle");
        }, 3000);
      } else {
        setIsSubmitting(false);
        setFormStatus("error");
        console.error("Webhook submission failed:", result.error);
      }
    } catch (error) {
      setIsSubmitting(false);
      setFormStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1">Location</h4>
                  <p className="text-foreground/80">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-serif font-bold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = {
                    github: (props: React.ComponentProps<"span">) => <span {...props}>GitHub</span>,
                    linkedin: (props: React.ComponentProps<"span">) => <span {...props}>LinkedIn</span>,
                    twitter: (props: React.ComponentProps<"span">) => <span {...props}>Twitter</span>,
                    mail: (props: React.ComponentProps<"span">) => <span {...props}>Email</span>,
                  }[link.icon as 'github' | 'linkedin' | 'twitter' | 'mail'];

                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-secondary rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors"
                    >
                      {Icon && <Icon className="inline-block" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-2.5 rounded-md bg-background border border-input",
                    "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",
                    "transition-colors"
                  )}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    "w-full px-4 py-2.5 rounded-md bg-background border border-input",
                    "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",
                    "transition-colors"
                  )}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={cn(
                    "w-full px-4 py-2.5 rounded-md bg-background border border-input",
                    "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",
                    "transition-colors resize-none"
                  )}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-md",
                  "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                  "disabled:opacity-70 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {formStatus === "success" && (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-3 rounded-md text-sm">
                  Your message has been sent successfully!
                </div>
              )}

              {formStatus === "error" && (
                <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-3 rounded-md text-sm">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}