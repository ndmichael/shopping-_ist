import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types';

function ShoppingList(props) {
    const { deleteItem, getItems } = props
    const { items, loading, error } = props.items

    useEffect(() => {
        getItems()
    }, [])


    const deleteClick = (id) => {
        deleteItem(id)
    }
    return loading ? (
        <h1> Data Loading</h1>
    ) : error ? (
        <h3>{error}</h3>
    ) : (
        <Container>

            <ListGroup>
                <TransitionGroup className="shopping-list" >
                    {
                        items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem >
                                    <p>
                                        <Button
                                            className="btn btn-danger btn-sm removeBtn"
                                            onClick={() => { deleteClick(_id) }}>&times;</Button>
                                        {name}
                                    </p>
                                </ListGroupItem>
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
            </ListGroup >
        </Container >
    );
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        items: state.item
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => dispatch(getItems()),
        deleteItem
    }
}

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList)