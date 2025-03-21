import React, { useEffect, useState } from 'react';
import { fetchDiscordEvents } from '../services/discord';
import { useStore } from '../store/useStore';

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const { serverId } = useStore(state => state);

    useEffect(() => {
        const getEvents = async () => {
            const fetchedEvents = await fetchDiscordEvents(serverId);
            setEvents(fetchedEvents);
        };

        getEvents();
    }, [serverId]);

    return (
        <div>
            <h1>Discord Events</h1>
            {events.length === 0 ? (
                <p>No events found.</p>
            ) : (
                <ul>
                    {events.map(event => (
                        <li key={event.id}>
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                            <p>Date: {new Date(event.date).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventsPage;