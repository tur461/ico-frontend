import "./styles.scss";

export default function Banner() {
    
    return (       
        <div className="sectionBanner displayBlock">
            <video 
                loop 
                muted 
                autoPlay 
                playsInline 
                type="video/mp4" 
                className="bannerVideo" 
                src="/videos/BannerVideo.mp4" 
            />
            <div className="quoteHome">
                <h2>
                    Revolutionsing climate <br />finance with <span>Web3</span> and <span>AI</span> <br />technology
                </h2>
            </div>
        </div>
        
    )
}