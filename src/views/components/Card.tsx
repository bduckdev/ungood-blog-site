type CardProps = {
  title: string;
  description: string;
  id: string;
  image: string;
};

function Card({ title, description, id, image }: CardProps) {
  return (
    <div class="card card-side bg-base-100 shadow-xl h-[250px]">
      <figure>
        <img src={image} alt="" class="w-[500px] h-[250px] object-cover" />
      </figure>
      <div class="card-body ">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <a href={`/posts/${id}`} class="btn btn-primary">
            Read
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
