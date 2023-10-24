import { useRouter } from "next/router";
import { useState } from "react";

const EventList = ({ events }) => {
    const [eventList, setEventList] = useState(events);
    const router = useRouter();

    const eventFetcher = async () => {
        const response = await fetch(' http://localhost:4000/events?category=Conference');
        const data = await response.json();
        setEventList(data);
        router.push('/events?catergory=Conference', undefined, { shallow: true });

    };

    return (
        <main>
            {eventList.map((event) => {
                return (
                    <div key={event.id}>
                        <h1>{event.id} {event.title}</h1>
                        <p>{event.body}</p>
                        <p>{event.date}</p>
                        <p>{event.category}</p>
                    </div>
                );
            })
            }
            <button onClick={eventFetcher} >Get conference event</button>

        </main>
    );
};

export default EventList;

export async function getServerSideProps(context) {
    const { query } = context;
    const { category } = query;
    const eventPath = category ? 'category=Conference' : '';
    const response = await fetch(`http://localhost:4000/events?${eventPath}`);
    const data = await response.json();

    return {
        props: {
            events: data
        }
    };
}