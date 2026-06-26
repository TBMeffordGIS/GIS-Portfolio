# Asset Address Problem

## Overview

Utilities can easily assign unique IDs to poles, transformers, valves, hydrants, and other infrastructure assets. The challenge is not identification. The challenge is location.

Street addresses work well for buildings but often fail for utility assets that may exist between addresses, behind structures, inside easements, or across large service territories.

This project explores the concept of the Asset Address Problem and investigates whether 360° imagery can function as a human-readable location system for utility infrastructure.

## Research Question

How can field personnel, engineers, and GIS professionals quickly locate a specific asset when traditional addressing systems are insufficient?

## Key Concepts

- Utility Asset Identification
- GIS Asset Management
- Human Readable Location Systems
- 360° Imagery
- Oriented Imagery
- Spatial Context
- Digital Twins

## Expected Deliverables

- Research article
- Supporting diagrams
- Example GIS workflows
- 360° imagery examples
- Location referencing concepts

## Figure 1: The Asset Address Problem

A utility asset may have a unique identifier but still lack a human-readable location reference. Traditional street addresses work for buildings but often fail for poles, transformers, hydrants, valves, and other distributed infrastructure assets.

### Why Existing Addresses Fail

- Assets often exist between street addresses.
- Assets may be located inside easements or rights-of-way.
- Multiple assets can share the same nearest address.
- GPS coordinates are precise but difficult for humans to communicate verbally.
- Field crews often rely on landmarks and visual context rather than coordinates alone.

### Proposed Solution

360° imagery provides something traditional addresses and coordinates cannot: visual context.

Instead of describing an asset as being located at a coordinate pair or near a street address, personnel can reference a location using imagery that captures what a person would actually see in the field.

When linked to GIS records, a 360° image can function as a human-readable location reference that complements asset IDs, GPS coordinates, and traditional asset management systems.

Potential advantages include:

- Faster asset discovery
- Reduced navigation errors
- Improved communication between office and field staff
- Better training and onboarding
- Enhanced support for digital twin environments

### Conceptual Workflow

```text
Asset ID
   ↓
GIS Database
   ↓
GPS Coordinates
   ↓
360° Imagery
   ↓
Human Readable Location Context
   ↓
Field Crew Navigation
```

## Figure 2: Traditional Address vs Human Readable Asset Location

| Traditional Location Method | Human Readable Location Method |
|----------------------------|--------------------------------|
| Asset ID | Asset ID |
| GPS Coordinates | GPS Coordinates |
| Nearest Street Address | 360° Imagery |
| Written Directions | Visual Landmarks |
| Map Reference | Field Context |
| Technician Interpretation | Immediate Recognition |
| Search & Verification | Visual Confirmation

## Figure 3: Traditional Asset Location vs Human Readable Asset Location

![Traditional Asset Location vs Human Readable Asset Location](traditional-vs-human-readable-location.png)

Comparison of traditional utility asset location methods and a human-readable location approach using imagery, visual landmarks, and field context.

## Example Scenario

A utility dispatcher receives a request to inspect transformer P-1024.

Using a traditional workflow, the technician receives an asset ID, GPS coordinates, and the nearest street address. The technician must interpret the information, navigate to the area, and verify the correct asset in the field.

Using a human-readable location workflow, the technician receives the same asset information along with imagery, visual landmarks, and field context. The technician can immediately recognize the asset location and confirm it visually before arriving on site.

This example demonstrates how imagery can complement traditional GIS asset records by providing location context that coordinates and addresses alone cannot easily communicate.

## Why Utility Assets Are Different

Unlike buildings, utility assets are often located between street addresses, inside easements, behind structures, or across large service territories.

A transformer, valve, hydrant, or power pole may have a unique asset identifier and precise GPS coordinates, but those references do not always provide the visual context needed for rapid field identification.

As a result, field personnel frequently rely on landmarks, local knowledge, and visual cues to locate infrastructure assets.

This creates an opportunity for imagery-based location systems to complement traditional GIS asset records by providing a human-readable representation of asset location.

## Why 360° Imagery Works

Traditional location methods communicate where an asset should be.

360° imagery communicates what the technician should expect to see.

Unlike coordinates or written directions, panoramic imagery preserves surrounding visual context including nearby structures, roads, vegetation, utility equipment, fences, access points, and landmarks. These environmental cues are often the information field personnel naturally use when locating infrastructure.

When linked to GIS asset records, a panoramic image becomes more than documentation. It becomes a visual reference that reduces interpretation, improves confidence, and accelerates asset verification.

Rather than replacing GIS coordinates, 360° imagery complements existing asset management systems by providing the human-readable context that numerical location references cannot communicate.

## Integration with Existing GIS Workflows

The human-readable asset location concept is intended to complement existing GIS and asset management systems rather than replace them.

A typical workflow may consist of:

1. A unique asset identifier stored within the enterprise GIS.
2. Geographic coordinates used for mapping and routing.
3. A linked 360° image providing visual context.
4. Metadata describing capture date, orientation, camera position, and field conditions.
5. Direct access to the imagery from the GIS record.

From a technician's perspective, selecting an asset record could immediately display both its mapped location and its surrounding visual environment. Rather than navigating solely by coordinates, personnel would understand what they should expect to see before arriving on site.

This approach enhances existing GIS workflows by combining spatial accuracy with visual understanding.

### Figure 4: Conceptual Integration with Existing GIS

                   Utility Enterprise GIS

                           │

                    Asset Record (P-1024)
         Asset ID • Coordinates • Attributes • Status

                           │

             ┌─────────────┼─────────────┐
             │             │             │

        Metadata      360° Imagery    Work Orders
             │             │             │

             └─────────────┼─────────────┘

                  Human Readable Location

                           │

                 Field Technician Device

                           │

             Visual Confirmation in the Field
This conceptual architecture illustrates how enterprise GIS records, metadata, work orders, and 360° imagery combine to provide a human-readable location reference for field personnel.

## Considerations and Limitations

The human-readable asset location concept is intended to complement existing GIS workflows rather than replace existing spatial referencing methods.

Several practical considerations should be acknowledged:

- 360° imagery requires periodic updates as infrastructure and surrounding environments change.
- Images should be captured using consistent positioning and orientation to maximize usability.
- Storage requirements increase as imagery collections grow.
- Metadata quality is critical for efficient searching and retrieval.
- Personnel should continue using GIS coordinates as the authoritative spatial reference.

Like any supporting dataset, imagery should be maintained as part of an organization's overall asset management strategy.

When properly managed, panoramic imagery becomes a long-term operational resource rather than simply a collection of photographs.

## Future Applications

The concept of human-readable asset locations extends beyond field navigation and has the potential to support several emerging technologies within the utility industry.

### Digital Twins

Digital twins require more than accurate geometry. They require context. Linking 360° imagery to GIS assets provides operators, engineers, and planners with a visual representation of infrastructure that complements traditional spatial data.

### Field Operations

Inspection, maintenance, and emergency response personnel could use human-readable asset locations to reduce search time, improve communication, and verify assets before work begins.

### Artificial Intelligence

As computer vision technologies continue to mature, AI systems may assist in automatically identifying utility assets, extracting metadata, detecting equipment changes, and supporting quality assurance of imagery collections.

### Asset Lifecycle Management

Historical imagery linked to asset records can provide a visual timeline of infrastructure condition, maintenance activities, vegetation growth, and environmental change throughout the asset lifecycle.

### Knowledge Preservation

Experienced field personnel often rely on visual memory and local knowledge to locate infrastructure. Human-readable asset locations help preserve that knowledge by capturing the surrounding environment as part of the permanent asset record.

The combination of GIS, metadata, and panoramic imagery has the potential to improve not only asset location, but also inspection workflows, infrastructure planning, and long-term utility asset management.

# Conclusion

This project began with a simple question:

**Can utility infrastructure be described in a way that is as intuitive for people as street addresses are for buildings?**

Throughout this research, I have argued that the challenge is not identifying infrastructure assets. Modern GIS and enterprise asset management systems already provide accurate identifiers, coordinates, and attribute information. The challenge is providing the visual context that allows field personnel to quickly understand where an asset is and what surrounds it.

By combining GIS, metadata, and 360° imagery, organizations have the opportunity to complement existing asset management practices with a human-readable method of communicating location. Rather than replacing coordinates or traditional GIS workflows, this approach adds another layer of understanding that supports navigation, inspection, maintenance, and decision-making.

As utilities continue to invest in digital twins, field mobility, computer vision, and AI-assisted workflows, the importance of connecting spatial accuracy with human understanding will continue to grow.

Ultimately, **the Asset Address Problem is not a problem of identification. It is a problem of context.** Solving that problem may help bridge the gap between how computers store location and how people naturally understand it.

# References

1. Esri. *ArcGIS Oriented Imagery Documentation.* https://doc.arcgis.com/en/arcgis-online/manage-data/oriented-imagery.htm

2. Esri. *ArcGIS Utility Network Documentation.* https://pro.arcgis.com/en/pro-app/latest/help/data/utility-network/

3. Open Geospatial Consortium (OGC). *OGC Standards and Specifications.* https://www.ogc.org/standards/

4. ISO 19115 Geographic Information — Metadata.

5. ISO 19157 Geographic Information — Data Quality.

6. National Institute of Standards and Technology (NIST). *Framework for Improving Critical Infrastructure Cybersecurity.*

7. United States Geological Survey (USGS). *The National Map.* https://www.usgs.gov/the-national-map

8. Federal Geographic Data Committee (FGDC). *Content Standard for Digital Geospatial Metadata (CSDGM).* https://www.fgdc.gov/

# Appendix A – Proposed Human-Readable Asset Metadata Schema

The following schema represents one possible implementation for extending existing GIS asset records with human-readable location metadata.

The objective is not to replace existing GIS attributes, but to supplement them with information that improves visual context, field navigation, asset verification, and future digital twin workflows.

| Field Name | Data Type | Example | Required | Purpose |
|------------|-----------|---------|:--------:|---------|
| Asset ID | String | TX-1024 | ✓ | Unique asset identifier |
| Utility Type | String | Electric | ✓ | Utility classification |
| Asset Type | String | Transformer | ✓ | Equipment classification |
| Latitude | Double | 33.452183 | ✓ | Geographic position |
| Longitude | Double | -112.581274 | ✓ | Geographic position |
| Capture Date | Date | 2026-06-20 | ✓ | Image acquisition date |
| Capture Time | Time | 14:35 MST | | Time of image capture |
| Camera Heading | Integer | 182° | ✓ | Camera viewing direction |
| Camera Height | Decimal | 2.4 m | | Camera position above ground |
| Direction of Travel | String | Northbound | | Vehicle or camera direction |
| Image Filename | String | TX1024_20260620.jpg | ✓ | Linked panoramic image |
| Weather Conditions | String | Clear | | Environmental context |
| Inspector | String | Vehicle 12 | | Image capture source |
| Work Order ID | String | WO-18493 | | Associated maintenance record |
| GIS Feature ID | String | 0003489 | ✓ | Enterprise GIS relationship |
| Remarks | Text | Vegetation partially obscures transformer. | | Additional field observations |
