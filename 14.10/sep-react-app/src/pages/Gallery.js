import { Typography, ImageList, ImageListItem } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"

const Gallery = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_page=0&_limit=10"
    )
    const data = await response.json()
    setImages(data)
    setLoading(false)
  }

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        marginTop="50px"
      >
        Gallery
      </Typography>
      <Box align="center">
        <ImageList
          sx={{ width: 500, height: 450 }}
          cols={3}
          rowHeight={164}
        >
          {images.map(image => {
            return (
              <ImageListItem key={image.id}>
                <img
                  srcSet={`${image.url},
                  ${image.url}`}
                  alt={image.title}
                  loading="lazy"
                />
              </ImageListItem>
            )
          })}
        </ImageList>
      </Box>
    </>
  )
}

export default Gallery
