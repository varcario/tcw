USE [TcwDb]
GO
/****** Object:  Table [dbo].[TcwDb]    Script Date: 2/3/2023 2:54:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GroupAddress](
	[Id] [int] IDENTITY(1,1) NOT NULL,
    [GroupId] [int] NOT NULL,
	[AddressId] [int] NOT NULL,
	[TS] [smalldatetime] NOT NULL,
	[Published] [bit] NOT NULL,
 CONSTRAINT [PK_GroupAddress] PRIMARY KEY CLUSTERED 
(
	[GroupId] ASC,
	[AddressId] ASC
),
CONSTRAINT FK_Group FOREIGN KEY (GroupId) REFERENCES [dbo].[Group](Id),
CONSTRAINT FK_Address FOREIGN KEY (AddressId) REFERENCES [dbo].[Address](Id)
);

GO