import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="bg-[#F8F5EF] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <FaPhoneAlt className="text-[#D9B15A]" />
            <h3 className="mt-4 font-semibold">Phone</h3>
            <p className="mt-2 text-gray-600">+91 9951743400</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <FaMapMarkerAlt className="text-[#D9B15A]" />
            <h3 className="mt-4 font-semibold">Location</h3>
            <p className="mt-2 text-gray-600">
              VDO's Colony, Khammam, Telangana 507002
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <FaInstagram className="text-[#D9B15A]" />
            <h3 className="mt-4 font-semibold">Instagram</h3>

            <a
              href="https://www.instagram.com/saisree_makeupstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-gray-600"
            >
              Visit Profile
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <FaFacebook className="text-[#D9B15A]" />
            <h3 className="mt-4 font-semibold">Facebook</h3>

            <a
              href="https://www.facebook.com/SaiSreeMakeupStudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-gray-600"
            >
              Visit Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
