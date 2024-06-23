import React from "react";
import Header from "./Header";
function Details() {
    return (
        <div>
            <Header />
            <div className="container">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Trivandrum_International_airport.jpg" class="d-block w-100"/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM6RphL5qHAn21t0KnOO9S2LvN06rcGdwJw&s" class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://english.mathrubhumi.com/image/contentid/policy:1.6010193:1662135518/image.jpg?$p=0f6e831&f=16x10&w=852&q=0.8" class="d-block w-100" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <strong>
                                                Introduction to Trivandrum International Airport (TVM)
                                            </strong>
                                        </h5>
                                        <p class="card-text">
                                            Welcome to Trivandrum International Airport, the gateway
                                            to the enchanting state of Kerala and the capital city of
                                            Thiruvananthapuram. As one of India's major international
                                            airports, Trivandrum International Airport (IATA: TRV,
                                            ICAO: VOTV) plays a crucial role in connecting the region
                                            with the rest of the world, offering a seamless travel
                                            experience to both domestic and international passengers.
                                            Overview Located approximately 6.7 kilometers (4.2 miles)
                                            from the city center, Trivandrum International Airport is
                                            the first airport in the state of Kerala and one of the
                                            oldest in India, having commenced operations in 1932. The
                                            airport is managed by the Airports Authority of India
                                            (AAI) and serves as a vital hub for travelers visiting the
                                            scenic destinations of Kerala, as well as those traveling
                                            for business or educational purposes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <strong>
                                                <strong>Key Features and Facilities</strong>
                                            </strong>
                                        </h5>
                                        <p class="card-text">
                                            1.Terminals: <br /> Terminal 1: Handles domestic flights with
                                            modern amenities and efficient services. <br /> Terminal 2:
                                            Dedicated to international flights, offering a range of
                                            facilities to cater to global travellers. <br />
                                            2. Passenger Services: Comfortable Lounges: Exclusive
                                            lounges for business class passengers and frequent flyers.
                                            Duty-Free Shopping: A variety of duty-free shops offering
                                            a wide selection of products. Dining Options: Numerous
                                            restaurants and cafes serving local and international
                                            cuisines. Currency Exchange: Convenient currency exchange
                                            counters and ATMs for financial transactions. Baggage
                                            Services: Efficient baggage handling and lost & found
                                            services. <br /> 3. Transportation: Taxi Services: Readily
                                            available taxis and ride-sharing services for easy access
                                            to the city and nearby areas. Public Transport:
                                            Well-connected public transportation options, including
                                            buses and trains. Car Rentals: On-site car rental services
                                            for travelers who prefer to drive. <br /> 4. Connectivity:
                                            Flight Network: Extensive domestic and international
                                            flight network connecting major cities across India and
                                            worldwide destinations in the Middle East, Southeast Asia,
                                            and beyond. Airlines: Home to several leading airlines
                                            offering regular services, including Air India, IndiGo,
                                            Emirates, Qatar Airways, and more. <br /> 5. Safety and
                                            Security: Advanced Security Systems: State-of-the-art
                                            security measures ensuring passenger safety. Health and
                                            Wellness: Medical facilities and first aid services
                                            available around the clock.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div className="card-title">
                                            <strong>
                                                Why Choose Trivandrum International Airport?
                                            </strong>
                                        </div>
                                        <p className="card-text">
                                            Strategic Location: Conveniently situated near the city
                                            center, providing easy access to the cultural, economic,
                                            and tourism hubs of Kerala. <br /> Efficient Services:
                                            Committed to offering a hassle-free and enjoyable travel
                                            experience with top-notch facilities and customer service.{" "}
                                            <br /> Rich Heritage: An airport with historical
                                            significance, reflecting the vibrant culture and heritage
                                            of Kerala.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div className="card-title"><strong>Conclusion</strong></div>
                                        <p className="card-text">
                                            Trivandrum International Airport stands as a testament to
                                            the region's growth and connectivity, providing a vital
                                            link for travelers from around the world. Whether you're
                                            visiting for business, leisure, or transit, TVM airport
                                            promises a pleasant and efficient journey, making it the
                                            preferred choice for millions of passengers each year.
                                            Welcome to Trivandrum International Airport – your gateway
                                            to the wonders of Kerala and beyond.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
