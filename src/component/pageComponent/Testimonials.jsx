import React from 'react';

const testimonials = [
    {
        name: "Christin T.",
        rating: 5,
        review: "I found WOW Vegas and in fell in love with this site. I have tried almost all of the sites online. WOW Vegas has the best slots by far."
    },
    {
        name: "Lisa",
        rating: 5,
        review: "I have been pleasantly surprised at the amazing customer service/support team. They were quick to reply to my questions and get me the answers I needed."
    },
    {
        name: "Teddy T.",
        rating: 5,
        review: "If you have been searching for an honest, fair, very well put together casino like I have, then you must give WOW Vegas a try!! I have tried so many sites just to be very disappointed, none of them even come close to my experience with WOW Vegas."
    },
    {
        name: "Jermani",
        rating: 5,
        review: "Great experience! Responsive 24/7 customer care service! Great games with great fun and funds! TWO THUMBS UP!!"
    },
    {
        name: "Momma B.",
        rating: 5,
        review: "Wow Vegas is an awesome gaming site. They have a star VIP program, a lot of giveaways and daily specials. The variety and number of games surpasses most of the other sites. The website is easy to use."
    },
    {
        name: "Driz O.",
        rating: 5,
        review: "I love wow Vegas there's games are legit, customer service is great, I haven't actually hit with them but the games are pretty cool bonuses are to!!"
    }
];

const TestimonialCard = ({ name, rating, review }) => {
    return (
        <div className="bg-[#202024] text-white   p-4 w-full rounded-2xl  shadow-md  flex flex-col gap-4 ">
            <h2 className="font-bold text-blue-400">{name}</h2>
            <div className="flex space-x-1 text-orange-500">
                {[...Array(rating)].map((_, index) => (
                    <span key={index} className="text-xl">⭐</span>
                ))}
            </div>
            <p className="text-gray-300 mt-2">{review}</p>
        </div>
    );
};

const Testimonials = () => {
    return (
        <div className=" w-full grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
    );
};

export default Testimonials;
