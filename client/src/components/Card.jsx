import React, { useState } from 'react'

//bootstrap components
import { Card, Modal, Button } from 'react-bootstrap'

//helpers
import dateFormatter from '../helpers/dateFormatter'

//base URL
const IMG_URL = 'https://image.tmdb.org/t/p/w440_and_h660_face'


export default function Cards({ list }) {

    //modal states
    const [show, setShow] = useState(false);

    //modal trigger function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="pl-2 pb-3 pt-3 card-container">
            <Card style={styles.card}>
                <Card.Img variant="top" style={styles.image} src={`${IMG_URL}/${list.poster_path}`} onClick={() => handleShow()}/>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <div className="bg-dark">
                <Modal.Header closeButton>
                    <Modal.Title className="text-center text-light title">{list.title ? list.title : list.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row text-light">
                        <div className="col-6">
                            <img src={`${IMG_URL}/${list.backdrop_path}`} style={styles.modalImage} alt={list.original_name}/>
                            <div className="release_date mt-4">
                                {list.release_date ? 'Released: ' : 'First on Air: '}{list.release_date ? dateFormatter(list.release_date) : dateFormatter(list.first_air_date)}
                            </div>
                            <div className={list.vote_average > 7 ? "popularity text-success" : "popularity text-danger"}>
                                Ratings: {list.vote_average}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="overview">
                                {list.overview}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                </div>
            </Modal>
        </div>
    )
}

const styles = {
    card: { width: '14rem', boxShadow:'1px 1px 5px black', borderRadius:'3%', backgroundColor:'black'},
    image: {borderRadius:'5%'},
    modalImage: { widht:'100%', height:'300px' }
}