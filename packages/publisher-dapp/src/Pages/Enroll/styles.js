export const useStyles = MUITheme => ({
	enrollMainContainer:{
		padding: '0 11%',
		'& > div':{
			padding: '32px 0',
			borderTopWidth: 1,
			borderTopColor: MUITheme.palette.text.disabled,
			borderTopStyle: 'solid',
			'&:last-of-type, &:first-of-type': { borderTop: 'none' },
			'& > p':{
				'&:first-of-type': { marginBottom: 15 },				
			},
			'& a':{ 
				color: MUITheme.palette.primary.main,
				textDecoration: 'none',
				fontWeight: 600
			}
		},
		'& h4':{ marginBottom: 12 },
		[MUITheme.breakpoints.down('sm')]: { padding: '0 35px' },
	},
	topSectionContainer:{ 
		textAlign: 'center',
		'& h3':{
			lineHeight: '48px'
		}
	},
	topSectionSubtitle:{
		paddingTop: 10,
		color: MUITheme.palette.text.primary,
		fontSize: 20,
		fontWeight: 300,
		lineHeight: '28px'
	},
	btnContainer:{ 
		paddingBottom: '0 !important',
		textAlign: 'center' 
	},
	description:{
		color: MUITheme.palette.text.primary,
		fontSize: 18,
		lineHeight: '26px'
	}
})