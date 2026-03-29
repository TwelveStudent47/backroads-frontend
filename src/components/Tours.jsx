import "../index.css"
import Title from "./Title"
import { tours } from "../data"

export default function Tours() {
    return (
        <div>
            <section className="section" id="tours">
                <div className="section-title">
                <Title title="featured" subTitle="tours"/>
                </div>

                <div className="section-center featured-center">
                    {tours.map((tour) => {
                        return (
                            <article className="tour-card" key={tour.id}>
                                <div className="tour-img-container">
                                    <img src={tour.image} className="tour-img" alt={tour.title} />
                                    <p className="tour-date">{tour.date}</p>
                                </div>
                                <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{tour.title}</h4>
                                </div>
                                <p>{tour.description}</p>
                                <div className="tour-footer">
                                    <p style={{textTransform:"capitalize"}}><span><i className={tour.icon}></i></span> {tour.place}</p>
                                    <p>{tour.dayCount} days</p>
                                    <p>from ${tour.price}</p>
                                </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}