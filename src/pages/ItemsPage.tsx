import React, { FC, useEffect, useState, useCallback } from "react"

import { useParams } from "react-router-dom"
import { ItemDetailView, ItemsListView } from "../components"

interface ParamTypes {
  id?: string
}

const ItemsPage: FC = () => {
  const [id, setId] = useState(-1)
  const params = useParams<ParamTypes>()

  const checkAndSetId = useCallback(() => {
    if (!params.id) return

    const parsedParam = parseInt(params.id)

    if (!parsedParam) return

    setId(parsedParam)
  }, [params])

  useEffect(() => {
    checkAndSetId()
  }, [checkAndSetId])

  return (
    <div className="page items">
      {params.id ? <ItemDetailView id={id} /> : <ItemsListView />}
    </div>
  )
}

export default ItemsPage
