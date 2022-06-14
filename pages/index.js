import Image from 'next/image'

export default function Wanchan() {
    return (
        <div className="container">
            <Image src="https://storage.googleapis.com/nextjs-arbitrary-image-path/wanchan.jpg" alt="ワンちゃんが海辺を走っている画像" width={640}
                height={427} />
        </div>
    )
}