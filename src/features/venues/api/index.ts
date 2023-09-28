import { API_METHODS, API_URL } from "@/src/config";

export const getVenues = async (venueSetter: any, loadingSetter: any) => {
    await fetch(API_URL + API_METHODS.venue.getVenues).then(response => response.json())
        .then(data => {
            venueSetter(data)
            loadingSetter(false)
        });
};

export const getVenueById = (venueId: string, venueSetter: any, loadingSetter: any) => {
    fetch(API_URL + API_METHODS.venue.getVenueById(venueId)).then(response => response.json())
    .then(data => {
        venueSetter(data);
        loadingSetter(false);
    });
};