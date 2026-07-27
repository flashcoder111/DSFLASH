import type { Metadata } from "next";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = { title: "Privacy", description: "Privacy information for Open Source Model Blog.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <PolicyPage eyebrow="Privacy" title="Privacy information" lead="Last updated July 27, 2026. This policy explains the limited information handled when you visit this publication or email its editorial team.">
    <h2>Information collected when you visit</h2>
    <p>This public website does not require accounts, comments or user profiles. Our hosting providers may process standard server information such as IP address, browser type, referring page, requested URL and approximate time of request to deliver and protect the site. We do not sell personal information.</p>
    <h2>Emails to the editorial team</h2>
    <p>If you email us, we receive the email address, message and any information you choose to provide. We use that correspondence to respond to the enquiry, assess correction or rights requests, and maintain an operational record where reasonably necessary.</p>
    <h2>Cookies, analytics and advertising</h2>
    <p>The current public site does not require advertising or analytics cookies to be read. If we add analytics, advertising or other services that use cookies or similar technologies, this policy will be updated before or when those services are enabled, with the relevant choices or notices where required.</p>
    <h2>External links</h2>
    <p>Links to third-party sites are governed by the privacy practices of those sites. Please review their policies before providing information or purchasing a product.</p>
    <h2>Contact</h2>
    <p>For privacy questions, email <a href="mailto:hello@deepseekflash.com">hello@deepseekflash.com</a>.</p>
  </PolicyPage>;
}
