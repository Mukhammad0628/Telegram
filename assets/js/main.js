 let INDEX = 0;


 let data = {
     config: {
         background: 'red',
         myName: 'Muhammad',
         myOldNames: [],
         myProfilePhoto: 'https://via.placeholder.com/150'
     },
     chats: [{
             chatId: 1,
             chatName: 'Abu',
             profileImg: 'https://picsum.photos/100?random=1&grayscale',
             chatNumber: '+998 99 142-34-71',
             chatMessages: [{
                     sender: "Muhammad",
                     message: "Qalesan"
                 },
                 {
                     sender: "Abu",
                     message: "Tuzumisan"
                 }
             ]
         },
         {
             chatId: 2,
             chatName: 'Yaxyo',
             profileImg: 'https://picsum.photos/100?random=2',
             chatNumber: '+998 99 999-99-99',
             chatMessages: [{
                     sender: "Muhammad",
                     message: "Yaxyo qattasan"
                 },
                 {
                     sender: "Yaxyo",
                     message: "Buxoroda"
                 }
             ]
         },
         {
             chatId: 3,
             chatName: 'Temur',
             profileImg: 'https://picsum.photos/100?random=3',
             chatNumber: '+998 99 333-33-33',
             chatMessages: [{
                     sender: "Muhammad",
                     message: "Tima Tel qivor"
                 },
                 {
                     sender: "Temur",
                     message: "Sal turib tel qvoraman"
                 }
             ]
         },
         {
             chatId: 4,
             chatName: 'Ibo',
             profileImg: 'https://picsum.photos/100?random=4',
             chatNumber: '+998 99 333-33-33',
             chatMessages: [{
                 sender: "Muhammad",
                 message: "Ibo kecha masala nma bo'ldi ?"
             }, {
                 sender: "Ibo",
                 message: "Xal qvomman o'rto"
             }]
         },
         {
             chatId: 5,
             chatName: 'Hamid',
             profileImg: 'https://picsum.photos/100?random=5',
             chatNumber: '+998 99 333-33-33',
             chatMessages: [{
                 sender: "Muhammad",
                 message: "Hamid Kelesga Ke"
             }, {
                 sender: "Hamid",
                 message: "Yo'ldama borvomma"
             }]
         },
         {
             chatId: 6,
             chatName: 'Jamshid',
             profileImg: 'https://picsum.photos/100?random=6',
             chatNumber: '+998 99 333-33-33',
             chatMessages: [{
                 sender: "Muhammad",
                 message: "Kevotganinda Tel qigin"
             }, {
                 sender: "Jamshid",
                 message: "Xob"
             }]
         },
         {
             chatId: 7,
             chatName: 'Vivo',
             profileImg: 'https://picsum.photos/100?random=7',
             chatNumber: '+998 99 333-33-33',
             chatMessages: [{
                 sender: "Muhammad",
                 message: "Chat me"
             }, {
                 sender: "Vivo",
                 message: "Let's goo"
             }]
         },
         {
             chatId: 8,
             chatName: 'Muhammad',
             profileImg: 'https://picsum.photos/100?random=8',
             chatNumber: '+998 99 333-33-33',
             chatMessages: [{
                 sender: "Muhammad",
                 message: "Bu man "
             }, {
                 sender: "Muhammad",
                 message: "Yo'g'e"
             }]
         }, {
             chatId: 9,
             chatName: 'Haybro',
             profileImg: 'https://picsum.photos/100?random=9&graysale&blur',
             chatNumber: '+998 12 34 56 78',
             chatMessages: [{
                 sender: "Muhammad",
                 message: "Rossiya qale ekan"
             }, {
                 sender: "Haybro",
                 message: "Yashasa bo'ladi"
             }]
         }
     ]
 }



 function ContactRender(name, photo) {

     const ProfileListItem = document.createElement("li");
     const ProfileImg = document.createElement("img");
     const ProfileName = document.createElement("p");



     ProfileListItem.classList.add("left-item");
     ProfileImg.classList.add("user-img");
     ProfileName.classList.add("name");




     ProfileImg.src = photo;
     ProfileName.textContent = name;

     ProfileListItem.appendChild(ProfileImg);
     ProfileListItem.appendChild(ProfileName);

     return ProfileListItem;
 }


 const LeftList = document.querySelector(".left-list")


 function RenderContactsList() {
     LeftList.innerHTML = "";
     for (let contacts of data.chats) {
         LeftList.appendChild(ContactRender(contacts.chatName, contacts.profileImg))
     }


 }
 console.log(LeftList);
 RenderContactsList();


 const AboutName = document.querySelector(".about-name")
 const ChatImg = document.querySelector(".chat-img");
 const ProfileListItem = document.querySelectorAll(".left-item");
 const rightProfi = document.querySelector(".right");

 ProfileListItem.forEach((element, index) => {

     console.log(element, index);
     element.addEventListener("click", event => {


         AboutName.textContent = event.target.innerText;
         ChatImg.src = event.target.childNodes[0].currentSrc
         console.log(event)
         INDEX = index

         ProfileListItem.forEach(e => {
             e.classList.remove("activeEles")

         })
         element.classList.add("activeEles")
         rightProfi.style.display = "block";

         renderMessages()

     })


 })


 // form

 const formElementSend = document.querySelector('.form');
 const massageInput = document.querySelector('.message-input');
 const massageList = document.querySelector('.messages-list');


 formElementSend.addEventListener("submit", event => {
     event.preventDefault()

     const newLiElement = document.createElement('li');
     newLiElement.classList.add('message-mine')

     newLiElement.textContent = massageInput.value
     data.chats[INDEX].chatMessages.push({
         message: massageInput.value,
         sender: data.config.myName
     })


    renderMessages()
     massageInput.value = null;
 })

 const messagesList = document.querySelector('.messages-list');

 function messageUser(message, sender) {
     if (sender == data.config.myName) {
         let messageMine = document.createElement("li");
         messageMine.classList.add("message-mine");
         messageMine.textContent = message
         return messageMine
     } else {
         let messageSended = document.createElement("li");
         messageSended.classList.add("message-sended");
         messageSended.textContent = message
         return messageSended
     }

 }



 function renderMessages() {
     messagesList.innerHTML = "";
     for (let message of data.chats[INDEX].chatMessages) {
         messagesList.appendChild(messageUser(message.message, message.sender))
     }
 }



 function menuToggle() {
     const toggleMenu = document.querySelector('.menu');
     toggleMenu.classList.toggle('active');
 }

 function aboutAccount() {
     const accountAbout = document.querySelector('.user-info');
     accountAbout.classList.toggle('active');
 }