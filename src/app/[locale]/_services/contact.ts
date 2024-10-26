'use server';
import axios from 'axios';
import { baseUrl } from '.';

export async function postMessage(formData: FormData) {
  const message = {
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  };

  try {
    const res = await axios.post(`${baseUrl}/v1/messages/send`, message);
    return { success: true, data: res.data };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}
