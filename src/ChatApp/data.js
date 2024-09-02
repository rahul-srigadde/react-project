import {faker} from "@faker-js/faker";

let fromUserid;
let toUserid;

function getRandomTimestamp(startDate, endDate) {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const randomTime = Math.floor(Math.random() * (end - start + 1)) + start;
    return new Date(randomTime).toISOString();
}

function getRandomUserId() {
    const statuses = ['rahul.srigadde@gmail.com', 'rahul.srigadde25@gmail.com', 'rahul.srigadde625@gmail.com'];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    return statuses[randomIndex];
}
const displayName ={
    'rahul.srigadde@gmail.com': 'User 1',
    'rahul.srigadde25@gmail.com': 'user 2',
    'rahul.srigadde625@gmail.com': 'user 3'
}
const generateRandomObject = () => {
    const from = getRandomUserId()
    const to = getRandomUserId()
    return {
        from,
        to,
        message: faker.music.songName(),
        timestamp: getRandomTimestamp('2023-01-01', '2023-12-31'),
        photoURL: faker.image.avatar(),
        fromDisplayName: displayName[from],
        toDisplayName: displayName[to],
        avatarDisp: faker.image.avatar()
    };
}
const getRandomChatHistory = (n, userId) => {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(generateRandomObject(userId));
    }
    return array.filter(x => x.from === userId || x.to === userId);
}

const  getUserId = userId =>{
    const user = getRandomUserId();

    if(user === userId){
        return getUserId(userId)
    }else{
        return user
    }
}

const setFromAndToUserid = () => {
    fromUserid = fromUserid || getRandomUserId();
    toUserid = toUserid || getUserId(fromUserid);
    return {
        fromUserid,
        toUserid
    }
}

export {
    getRandomChatHistory,
    setFromAndToUserid,
    getRandomTimestamp,
    displayName
};
