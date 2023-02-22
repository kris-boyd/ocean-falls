# Ocean Falls
A website to display locations of historical photos of Ocean Falls, BC on a map.

Made with create-react-app, and react-bootstrap for modal components and styling

georeferencer.com was used to create a geo-referenced image file from a custom map

Mapbox.com serves vector tiles of the map and serves data as style layers; circles on the map represent locations of photos, and open a popup thumbnail of the image and text

Images are hosted in AWS S3 bucket
image metadata including AWS URL is input in a google sheet, then uploaded as csv to mapbox layer
