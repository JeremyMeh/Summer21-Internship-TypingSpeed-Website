export async function getAllUsers() {

    try{
        const response = await fetch('/api/users');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

export async function getPara() {
    try{
        const response = await fetch('/api/solo');
        return await response.json();
    } catch(error) {
        return [];
    }
};

// default export getPara;