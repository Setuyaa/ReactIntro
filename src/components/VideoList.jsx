const videos = [
    {
        name: '1 video',
        duration: 15,
        id:1,
    },
    {
        name: '2 video',
        duration: 15,
        id:2,
    },
    {
        name: '3 video',
        duration: 15,
        id:3,
    }
]

export function VideoList() {
    return (
        <>
            <h1>Video List</h1>
            {
                videos.map((video) => {
                    return (
                        <div key={video.id}>
                            <p>{video.name}</p>
                            <p>{video.duration}</p>
                            <button>Hppsw</button>
                        </div>)
                }
                )
            }
        </>
    )
}