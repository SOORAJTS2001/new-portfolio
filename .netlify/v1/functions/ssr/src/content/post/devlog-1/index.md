---
title: "Converting coordinates to clarity"
description: "RetroGeo: A Fast and Efficient Reverse Geocoding Library in Python"
publishDate: "25 November 2024"
coverImage:
  src: "./Retro-Geo.png"
  alt: "Retro Geo Icon"
tags: ["Python", "Geospatial","Reverse Geocoding","cKDTree","Pydantic"]
---

# RetroGeo: A Fast and Efficient Reverse Geocoding Library in Python

## Introduction

Reverse geocoding is the process of converting geographic coordinates (latitude and longitude) into human-readable location names, such as city, state, and country. Most solutions for reverse geocoding rely on API calls, which can be slow and costly. To address this, I developed **RetroGeo**, a high-performance Python library for reverse geocoding that works **offline**, leveraging **cKDTree** for fast nearest neighbor searches and **multiprocessing** for scalability.

## How RetroGeo Works

RetroGeo follows a structured approach to efficiently resolve coordinates to locations:

1. **Preloading Data**: A CSV file containing geographical coordinates mapped to cities, states, and countries is loaded into a Pandas DataFrame.
2. **Building a Spatial Tree**: The latitude-longitude points are transformed into a **cKDTree** structure from `scipy.spatial`, enabling fast nearest neighbor lookups.
3. **Parallel Processing**: RetroGeo utilizes Python's `multiprocessing` to handle multiple reverse geocoding queries in parallel, making it highly efficient for bulk processing.
4. **Structured Output**: The results are returned as a Pydantic BaseModel, ensuring structured and validated data.


### Installation
Install our library via pip:

```bash
pip install RetroGeo
```

## Example

### For Single Thread Execution (For a single coordinate pair)
```python
import asyncio

from RetroGeo import GeoLocator, ThreadTypeEnum


async def main():
    rev = GeoLocator()
    locations = [(9.964498569974612, 76.25592213325532)]
    result = await rev.getLocationFromCoordinates(locations, mode=ThreadTypeEnum.SINGLE_THREADED.value)
    print(result)


if __name__ == '__main__':
    asyncio.run(main())
```
### For Multithread Execution (List of coordinates pairs)
```python
import asyncio
import random

from RetroGeo import GeoLocator


async def main():
    rev = GeoLocator()
    locations = []
    for _ in range(10000):
        lat = random.uniform(-90, 90)
        lon = random.uniform(-180, 180)
        locations.append((lon, lat))
    results = await rev.getLocationFromCoordinates(locations)


if __name__ == '__main__':
    asyncio.run(main())
```

## Output
The Output would a dictionary with key as the given coordinates and the output as the `LocationBaseModel`.
Which is a pydantic base model
```python
class LocationBaseModel(BaseModel):
    lat: float = Field(..., description="Latitude of the main location")
    lon: float = Field(..., description="Longitude of the main location")
    name: str = Field(..., description="Name of the location")
    admin1: str = Field(..., description="Name of the primary administrative division (e.g., country)")
    admin2: str = Field(..., description="Name of the secondary administrative division (e.g., state or province)")
    admin1_id: int = Field(..., description="ID of the primary administrative division")
    admin2_id: int = Field(..., description="ID of the secondary administrative division")
    admin1_lat: Optional[float] = Field(None, description="Latitude of the primary administrative division")
    admin1_lon: Optional[float] = Field(None, description="Longitude of the primary administrative division")
    admin2_lat: Optional[float] = Field(None, description="Latitude of the secondary administrative division")
    admin2_lon: Optional[float] = Field(None, description="Longitude of the secondary administrative division")
```
### Output data
```markdown
{(9.964498569974612, 76.25592213325532): LocationBaseModel(lat=9.93988, lon=76.26022, name='Cochin', admin1='India', admin2='Kerala', admin1_id=101, admin2_id=4028, admin1_lat=20.0, admin1_lon=77.0, admin2_lat=10.8505159, admin2_lon=76.2710833)}
```
