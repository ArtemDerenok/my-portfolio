interface IMail {
  name: string;
  email: string;
  message: string;
}

const BASE_URL = 'https://porfolioserver-1a5s.onrender.com'

const psotMail = async (data: IMail) => {
  try {
    const response = await fetch(`${BASE_URL}/mail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(data)
    })

    const result = { ok: response.ok, status: response.status };
    return result
  } catch (error) {
    console.log((error as Error).message);
  }
}


export default psotMail;
