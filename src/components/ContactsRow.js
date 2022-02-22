

const ContactsRow = ({ name, pictureUrl, popularity, id, wonOscar, wonEmmy }) => {

    return (
        <tr>
            <td>
                <img src={pictureUrl} alt={`${name}'s photo`} />
            </td>
            <td>
                <p>{name}</p>
            </td>
            <td>
                <p>{popularity}</p>
            </td>
        </tr>
    )
}

export default ContactsRow