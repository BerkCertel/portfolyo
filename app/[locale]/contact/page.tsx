"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import PageProvider from "@/components/providers/PageProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  ContactFormData,
  contactFormSchema,
} from "@/validations/contactFormSchema";
import { useTranslations } from "next-intl";
import { contactInfo } from "@/constant/contactInfo";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [success, setSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      reason: "",
    },
  });

  const contactReasons = [
    { value: "", label: t("contactReasonPlaceholder") },
    { value: "general", label: t("contactReasons.general") },
    { value: "project", label: t("contactReasons.project") },
    { value: "job", label: t("contactReasons.job") },
    { value: "support", label: t("contactReasons.support") },
    { value: "other", label: t("contactReasons.other") },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success(t("success"));
        setSuccess(t("success"));
        reset();
      } else {
        toast.error(t("error"));
        setSuccess(t("error"));
      }
    } catch {
      toast.error(t("error"));
      setSuccess(t("error"));
    }
  };

  return (
    <PageProvider>
      <section className="pt-16 pb-6 md:pt-24 bg-background">
        <div className="">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t("title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            {/* Contact Info - Second on mobile, right on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col w-full lg:w-1/2"
            >
              <Card className="flex-1 flex flex-col justify-center shadow-sm border rounded-xl overflow-hidden">
                <CardContent className="p-8 flex flex-col items-center">
                  {/* Image - hidden on mobile, full on desktop */}
                  <div className="w-full flex justify-center mb-6">
                    <div className="relative w-full h-80 rounded-lg overflow-hidden hidden lg:block">
                      <Image
                        src="/home.png"
                        alt="Contact"
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 0vw, (min-width: 769px) 50vw"
                        priority
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {t("contactInfoTitle")}
                    </h3>
                    <div className="space-y-3 mb-6">
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <span>{contactInfo.email}</span>
                      </a>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span>{contactInfo.phone}</span>
                      </a>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                        {t("followMe")}
                      </h4>
                      <div className="flex gap-2">
                        {contactInfo.socials.map((social) => (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border"
                            aria-label={social.name}
                          >
                            <social.icon className="w-5 h-5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col w-full lg:w-1/2"
            >
              <Card className="flex-1 flex flex-col justify-center shadow-sm border rounded-xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("nameLabel")}</Label>
                      <Input
                        id="name"
                        placeholder={t("namePlaceholder")}
                        {...register("name")}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("emailLabel")}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        {...register("email")}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("phoneLabel")}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t("phonePlaceholder")}
                        {...register("phone")}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reason">{t("reasonLabel")}</Label>
                      <Select
                        value={watch("reason")}
                        onValueChange={(value) =>
                          setValue("reason", value, { shouldValidate: true })
                        }
                      >
                        <SelectTrigger
                          className={`w-full ${
                            errors.reason ? "border-destructive" : ""
                          }`}
                        >
                          <SelectValue
                            placeholder={t("contactReasonPlaceholder")}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {contactReasons
                            .filter((reason) => reason.value !== "")
                            .map((reason) => (
                              <SelectItem
                                key={reason.value}
                                value={reason.value}
                              >
                                {reason.label}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      {errors.reason && (
                        <p className="text-sm text-destructive">
                          {errors.reason.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">{t("messageLabel")}</Label>
                      <Textarea
                        id="message"
                        placeholder={t("messagePlaceholder")}
                        rows={6}
                        {...register("message")}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        t("sendButton")
                      )}
                    </Button>
                    {success && (
                      <p
                        className={`text-center mt-4 ${
                          success === t("success")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {success}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageProvider>
  );
}
