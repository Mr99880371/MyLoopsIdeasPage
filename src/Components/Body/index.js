import React from 'react';
import Flatlist from 'flatlist-react';
import { BodyContainer } from './styles';

const Body = () => {

  const bookList = () => {
    return (
      <Flatlist
        data={[1, 2, 3]}
        renderItem={({ item }) => <div>{item[0]}</div>}
        keyExtractor={(item) => item.id}
      />
    );
  };

  return (
    <BodyContainer>
      <h1>My Loop of Ideas</h1>
      <p>
        Just created this forum to share my original projects and host diverse projects of any genre from freelance writers who also want to bring their stories to the world.
      </p>
      <p>Join us now!</p>
      <div>
        <h2>My reading list</h2>
        {bookList()}
      </div>

      <div>
        <h2>favorites</h2>
        {bookList()}
      </div>
    </BodyContainer>
  );
};

export default Body;