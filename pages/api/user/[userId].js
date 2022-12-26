const handler = (req, res) => {
  const { userId } = req.query
  res
    .status(200)
    .json({
      data: `This is an API endpoint to fetch ${userId}'s user information`,
    })
}

export default handler
