const MOCK_ANSWERS = {
  ['Hello!']: [
    'Hi, my name in Anton and this is my personal page! I hope you enjoy it!',
    'Hello! What a nice day!',
  ],
  ['Bye!']: ['Have a nice day!', 'See you!'],
  ['I would like to contact you']:
    'Please, follow the page "Contact" in the header section and send the form!',
};

// Chat API with pre-built UI
// and notifications included
// https://talkjs.com/
// пока нет ответов, т.к необходимо использовать запросы
Talk.ready.then(function () {
  var me = new Talk.User({
    id: '123456',
    name: 'User',
    email: 'test@example.com',
    photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
    welcomeMessage: 'Hey there! How are you? :-)',
    role: 'default',
  });
  window.talkSession = new Talk.Session({
    appId: 'trNLcxiz',
    me: me,
  });
  var other = new Talk.User({
    id: '654321',
    name: 'Anton',
    email: 'avfomichev_2@edu.hse.ru',
    photoUrl: 'assets/images/anton-avatar.jpg',
    welcomeMessage: 'Hey, how can I help?',
  });

  var conversation = talkSession.getOrCreateConversation(
    Talk.oneOnOneId(me, other)
  );
  conversation.setParticipant(me);
  conversation.setParticipant(other);

  const chatbox = talkSession.createChatbox();
  chatbox.select(conversation);
  chatbox.mount(document.getElementById('talkjs-container'));

  const handleSendMessage = (event) => {
    console.log(event.message.text);
  };

  chatbox.onSendMessage(handleSendMessage);
});
