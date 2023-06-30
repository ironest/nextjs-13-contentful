import './title.scss';

const SRTitle = ({ blok }: { blok: any }) => {
  return (
    <div>
      <h1 className="sr-title">{blok.text}</h1>
    </div>
  );
};

export default SRTitle;
