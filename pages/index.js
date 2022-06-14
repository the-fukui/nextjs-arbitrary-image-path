import Image from 'next/image'

export default function Wanchan() {
    return (
        <div className="container">
            <Image src="/proxy/wanchan.jpg" alt="ワンちゃんが海辺を走っている画像" width={640}
                height={427} />
        </div>
    )
}