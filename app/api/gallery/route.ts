import { NextRequest, NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get("folder");

    if (!folder) {
      return NextResponse.json(
        { error: "Folder parameter is required" },
        { status: 400 }
      );
    }

    // Sanitize folder path to prevent directory traversal
    const sanitizedFolder = folder.replace(/\.\./g, "").replace(/^\//, "").trim();
    
    // Path to the images directory in public folder
    const imagesPath = join(process.cwd(), "public", "static", "images", sanitizedFolder);

    try {
      const files = await readdir(imagesPath);
      
      // Filter for image files only
      const imageFiles = files.filter((file) => 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
      );

      // Return image paths relative to public folder
      const imagePaths = imageFiles.map((file) => 
        `/static/images/${sanitizedFolder}/${file}`
      );

      return NextResponse.json({ images: imagePaths }, { status: 200 });
    } catch (error: any) {
      // Directory doesn't exist or can't be read
      if (error.code === "ENOENT") {
        return NextResponse.json({ images: [] }, { status: 200 });
      }
      throw error;
    }
  } catch (error: any) {
    console.error("Error reading gallery directory:", error);
    return NextResponse.json(
      { error: error.message || "Failed to read gallery directory" },
      { status: 500 }
    );
  }
}

