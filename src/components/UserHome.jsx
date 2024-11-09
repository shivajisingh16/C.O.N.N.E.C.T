import React from "react";
import Achievements from "./Achievements";
import UpcomingEvents from "./UpcomingEvents";
import UpcomingMentorship from "./UpcomingMentorship";
function UserHome({ userData ,events,mentorships}) {
  return (
    <div className="flex flex-col gap-8">
      <Achievements
        credits={userData.credits}
        sessions={userData.sessions}
        followers={userData.followers}
        eventsHosted={userData.eventsHosted}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UpcomingEvents events={events} />
        <UpcomingMentorship mentorships={mentorships} />
      </div>
    </div>
  );
}

export default UserHome;
