window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/'

    const response = await fetch(url)

    if (!response.ok) {
        console.error("Got an error in the response")
    } else {
        const data = await response.json()

        const selectTag = document.getElementById('conference')
        for (let conference of data.conferences) {
            let option = document.createElement('option')

            option.value = conference.id
            option.innerHTML = conference.name
            selectTag.appendChild(option)
        }
        const formTag = document.getElementById('create-presentation-form')
        formTag.addEventListener('submit', async event => {
            event.preventDefault()

            const formData = new FormData(formTag)
            const conferenceId = selectTag.options[selectTag.selectedIndex].value
            const json = JSON.stringify(Object.fromEntries(formData))
            const presentationUrl = `http://localhost:8000/api/conferences/${conferenceId}/presentations/`
            const fetchConfig = {
                method: "post",
                body: json,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const presentationResponse = await fetch(presentationUrl, fetchConfig)
            if (presentationResponse.ok) {
                formTag.reset()
                const newPresentation = await presentationResponse.json()
            }
    })
    }
})
