import './description.scss';

const SRDescription = ({ blok }: { blok: any }) => {
  return (
    <div >
      <h1 className="sr-description">{blok.text}</h1>
    </div>
  );
};

export default SRDescription;
