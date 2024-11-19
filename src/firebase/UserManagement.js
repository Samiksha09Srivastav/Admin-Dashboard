import { db } from './Firebase';
import { setDoc, doc } from 'firebase/firestore';

const addUserWithRole = async (userId, email, role) => {
  try {
    await setDoc(doc(db, 'users', userId), {
      email,
      role,
    });
    console.log('User added with role');
  } catch (error) {
    console.error('Error adding user with role:', error);
  }
};

export { addUserWithRole };