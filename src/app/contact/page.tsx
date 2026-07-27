import type { Metadata } from "next";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Open Source Model Blog for editorial corrections, rights questions and general enquiries.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return <PolicyPage eyebrow="Contact" title="Get in touch with the editorial team." lead="For editorial corrections, rights enquiries or general questions about this publication, email hello@deepseekflash.com.">
    <h2>Email</h2>
    <p><a href="mailto:hello@deepseekflash.com">hello@deepseekflash.com</a></p>
    <h2>Corrections and source updates</h2>
    <p>Please include the page URL, the specific statement you are querying and a link to the primary source. We review substantiated correction requests and update material inaccuracies as appropriate.</p>
    <h2>Rights and product enquiries</h2>
    <p>Use the same address for image-rights questions, attribution requests, product-link enquiries or other publication matters. This is an editorial mailbox; it does not provide support for third-party AI products or providers.</p>
  </PolicyPage>;
}
