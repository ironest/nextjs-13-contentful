import "./top-performer.scss";


import Image from "next/image";

const SRTopPerformer = ({ blok }: { blok: any }) => {
  return (
    <div>
      <div className="flex">
        <Image
          className="award"
          src={'https:' + blok.canstarAward.fields.file.url}
          alt="Preview of Navbar"
          width={200}
          height={200}
          key={blok.canstarAward.id}
        />
        <section className="performer-info">
          <p className="title">{blok.title}</p>
          <p className="provider">{blok.providerName}</p>
          <p className="description">{blok.description}</p>
        </section>
        <Image
        className="provider"
          src={'https:' + blok.providerLogo.fields.file.url}
          alt="Preview of Navbar"
          width={250}
          height={200}
          key={blok.providerLogo.id}
        />
      </div>
    </div>
  );
};

export default SRTopPerformer;
