USE [TcwDb]
GO
/****** Object:  Table [dbo].[TcwDb]    Script Date: 2/3/2023 2:54:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Address](
	[Id] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[StreetAddress] [varchar](64) NOT NULL,
    [Suite] [varchar] (16),
    [ZipCode] [varchar] (16),
    [City] [varchar] (96) NOT NULL,
    [StateId] [int] (32) FOREIGN KEY REFERENCES StateLookup(Id),
	[TS] [smalldatetime] NOT NULL,
	[Published] [bit] NOT NULL,
 CONSTRAINT [PK_Address] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO