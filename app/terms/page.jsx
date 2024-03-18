/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="mt-[5rem] max-w-4xl mx-auto p-3">
        <p className="text-center">
          The following text outlines important information and terms of use for
          <Link href="/" className="font-bold text-red-500 ml-2">
            Flixnomad
          </Link>
          . By accessing or using this website, you agree to comply with and be
          bound by the following Terms and Conditions:
        </p>
        <hr className="my-5" />
        <p className="text-base mb-6">
          <strong>Legal Content:</strong> We do not host any copyrighted content
          on our servers. Users are responsible for ensuring the legality of the
          content in their jurisdiction.
        </p>

        <p className="text-base mb-6">
          <strong>Copyright Compliance:</strong> We respect copyright laws and
          users are advised to only download and distribute movies for which
          they have proper rights or permissions.
        </p>

        <p className="text-base mb-6">
          <strong>Third-Party Links:</strong> This website may contain links to
          external websites. We do not endorse, control, or guarantee the
          accuracy, completeness, or legality of content on these external
          sites. Users access these links at their own risk.
        </p>

        <p className="text-base mb-6">
          <strong>Responsibility:</strong> Users are solely responsible for
          their actions while using this website. We do not take responsibility
          for any legal consequences or actions that may arise from improper or
          illegal use of the downloaded content.
        </p>

        <p className="text-base mb-6">
          <strong>Viruses and Malware:</strong> We make reasonable efforts to
          ensure that our website is free from viruses and malware. However, we
          do not guarantee that the website will be completely free from such
          threats. Users are advised to use reliable security measures when
          downloading content.
        </p>

        <p className="text-base mb-6">
          <strong>Changes and Availability:</strong> We reserve the right to
          modify, suspend, or discontinue the website's availability, features,
          or content at any time without prior notice.
        </p>

        <p className="text-base mb-6">
          <strong>No Warranty:</strong> This website is provided on an "as is"
          basis without any warranties, express or implied. We do not warrant
          the accuracy, reliability, or suitability of the content available on
          the website.
        </p>
        <p>
          By accessing and using this website, you agree to the above Terms and
          Conditions. These Terms and Conditions are subject to change without
          notice, and it is your responsibility to review this page periodically
          for updates.
        </p>
      </div>
    </>
  );
};

export default Page;
