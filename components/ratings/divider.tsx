import Image from "next/image";

const SRDivider = ({ blok }: { blok: any }) => {
  return (
    <div>
      <Image
        src={"http:" + blok.divider.fields.file.url}
        alt="Divider"
        width={2000}
        height={200}
        key={blok.divider.id}
      />
    </div>
  );
};

export default SRDivider;
