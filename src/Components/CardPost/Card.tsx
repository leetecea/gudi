import './cardStyle.sass'

type CardProps = {
  image: string;
  alt: string;
  title: string;
  paragraph: string;
}

export default function CardPost({image , alt, title, paragraph}: CardProps) {
  return (
    <>
      <section className="Card">
        <img src={image} alt={alt}/>
        <section className="CardPost">
          <div className='Post'>
            <div></div>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <button>Agendar</button>
          </div>
        </section>
      </section>
    </>
  )
}
