function createCard(name, description, pictureUrl, startDate, endDate, location) {
    return `
    <div class="card-group p-2">
        <div class="card shadow p-3 bg-white rounded">
            <img src="${pictureUrl}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-text"><small class="text-muted">${location}</small></h6>
                <p class="card-text">${description}</p>
            </div>
            <div class="card-footer text-muted">
                ${startDate} - ${endDate}
            </div>
        </div>
    </div>
    `;
}

window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/'

    try {
        const response = await fetch(url)

        if (!response.ok) {
            console.error("Got an error in the response")
        } else {
            const data = await response.json()

            for (let conference of data.conferences) {

                const detailUrl = `http://localhost:8000${conference.href}`
                const detailResponse = await fetch(detailUrl)
                if (detailResponse.ok) {
                    const details = await detailResponse.json()
                    const name = details.conference.name
                    const description = details.conference.description
                    const pictureUrl = details.conference.location.picture_url

                    const getStartDate = new Date(details.conference.starts)
                    const startDate = `${getStartDate.getMonth()+1}/${getStartDate.getDate()}/${getStartDate.getFullYear()}`
                    const getEndDate = new Date(details.conference.ends)
                    const endDate = `${getEndDate.getMonth()+1}/${getEndDate.getDate()}/${getEndDate.getFullYear()}`

                    const location = details.conference.location.name

                    const html = createCard(name, description, pictureUrl, startDate, endDate, location)
                    const column = document.querySelector('.row')
                    column.innerHTML += html
                }
            }
        }
    } catch (error) {
        console.error('error', error)
    }

});
