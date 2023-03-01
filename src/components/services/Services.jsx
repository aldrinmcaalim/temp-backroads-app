import Title from "../title/Title";
import { services } from "../../data";
import Service from "../service/Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((link) => {
          const { id } = link;
          return <Service key={id} {...link} />;
        })}
      </div>
    </section>
  );
};

export default Services;
