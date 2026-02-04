package handlers

import (
	"encoding/json"
	"net/http"

	"ecommerce/models"
)

var orders []models.Order

func CreateOrder(w http.ResponseWriter, r *http.Request) {
	var order models.Order
	json.NewDecoder(r.Body).Decode(&order)

	for _, p := range products {
		if p.ID == order.ProductID {
			order.Total = p.Price * float64(order.Quantity)
			break
		}
	}

	order.ID = len(orders) + 1
	orders = append(orders, order)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(order)
}
