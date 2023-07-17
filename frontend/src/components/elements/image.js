export default function Image({image}) {
	return (
		<div>
            <img src={image.url} alt={image.description} />
        </div>
	)
}
