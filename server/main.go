package main

import "github.com/gin-gonic/gin"

func pingHandler(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "pong",
	})

}

func setupRouter() *gin.Engine {
	r := gin.Default()
	r.GET("/ping", pingHandler)
	return r
}

func main() {
	r := setupRouter()
	r.Run()
}
