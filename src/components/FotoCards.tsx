interface PhotoCardProps {
    titulo: string;
    url: string;
  }
  
  const PhotoCard: React.FC<PhotoCardProps> = ({ titulo, url }) => (
    <div className="group relative">
      <img
        src={url}
        alt={titulo}
        className="w-full h-auto rounded shadow-md group-hover:scale-105 transition-transform duration-200"
      />
      <h2 className="text-center text-sm mt-2">{titulo}</h2>
    </div>
  );
  
  export default PhotoCard;